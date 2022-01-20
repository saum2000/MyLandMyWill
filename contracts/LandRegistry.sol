//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract LandRegistry {

    // Defining the Stakeholders entities envolved in the Land Registration process

    // Land Details
    struct Land{
        uint landId;
        uint propertyPID;
        uint pincode;
        uint landPrice;
        string city;
        string state;        
        uint physicalSurveyNumber;
        string ipfsHash; // for document upload
        string document; // document type
    }

    // Buyer Details
    struct Buyer{
        address buyerId;
        string buyerName;
        uint age;
        string city;
        string aadharNumber;
        string panNumber;        
    }

    // Seller Details
    struct Seller{
        address sellerId;
        string sellerName;
        uint age;
        string city;
        string aadharNumber;
        string panNumber;    
    }

    // Government Official Details
    struct GovtOfficial{
        string name;
        uint age;
        string designation;
    }

    // Land Request details
    struct LandRequest{
        uint requesId;
        address sellerId;
        address buyerId;
        uint landId;
        // bool requestStatus;
        // bool requested;
    }


    // Mappings

    mapping(uint => Land) public lands;
    // mapping(uint => GovtOfficial) public GovtOfficialMapping;
    mapping(address => Seller) public SellerMapping;
    mapping(address => Buyer) public BuyerMapping;
    mapping(uint => LandRequest) public RequestsMapping;
    mapping(address => bool) public RegisteredAddressMapping;
    mapping(address => bool) public RegisteredSellerMapping;
    mapping(address => bool) public RegisteredBuyerMapping;
    mapping(address => bool) public SellerVerification;
    mapping(address => bool) public SellerRejection;
    mapping(address => bool) public BuyerVerification;
    mapping(address => bool) public BuyerRejection;
    mapping(uint => bool) public LandVerification;
    mapping(uint => address) public LandOwner;
    mapping(uint => bool) public RequestStatus;
    mapping(uint => bool) public RequestedLands;
    mapping(uint => bool) public PaymentReceived;


    address public GovtOfficialAddress;
    GovtOfficial govtOfficial;
    address[] public sellers;
    address[] public buyers;

    uint public landsCount;
    uint public sellersCount;
    uint public buyersCount;
    uint public requestsCount;

    modifier _onlyGovtOfficial() {
        require(msg.sender == GovtOfficialAddress);
        _;
    } 

    modifier _onlyVerifiedLand(uint _landId) {
        require(LandVerification[_landId] == true);
        _;
    }

    modifier _onlyRegisteredSeller() {
        require(RegisteredSellerMapping[msg.sender] == true);
        _;
    }

    modifier _onlyRegisteredBuyer() {
        require(RegisteredBuyerMapping[msg.sender] == true);
        _;
    }

    modifier _onlyRegisteredAddress() {
        require(RegisteredAddressMapping[msg.sender] == true);
        _;
    }

    modifier _onlyUnregisteredAddress() {
        require(RegisteredAddressMapping[msg.sender] == false);
        _;
    }

    modifier _onlyVerified() {
        require(SellerVerification[msg.sender] == true || BuyerVerification[msg.sender] == true);
        _;
    }

    modifier _paid(uint _landId) {
        require(PaymentReceived[_landId] == true);
        _;
    }

// string memory _name, uint _age, string memory _designation
    constructor() {
        GovtOfficialAddress = msg.sender;
        govtOfficial = GovtOfficial("Abcd",80,"Tehsildar");
    }

    function verifySeller() _onlyGovtOfficial public{
        SellerVerification[msg.sender] = true;
    }

    function rejectSeller() _onlyGovtOfficial public{
        SellerRejection[msg.sender] = true;
    }

    function verifyBuyer() _onlyGovtOfficial public{
        BuyerVerification[msg.sender] = true;
    }

    function rejectBuyer() _onlyGovtOfficial public{
        BuyerRejection[msg.sender] = true;
    }

    function verifyLand(uint _landId) _onlyGovtOfficial public{
        LandVerification[_landId] = true;
    }

    function registerLand(uint _pincode, string memory _city,string memory _state, uint _landPrice, uint _propertyPID,uint _surveyNum,string memory _ipfsHash, string memory _document) _onlyRegisteredSeller _onlyVerified public {
        lands[landsCount] = Land(landsCount+1, _propertyPID, _pincode, _landPrice, _city, _state, _surveyNum, _ipfsHash, _document);
        landsCount++;
        LandOwner[landsCount] = msg.sender;
    }

     function registerSeller(string memory _name, uint _age, string memory _aadharNumber, string memory _panNumber, string memory _city) _onlyUnregisteredAddress public {

        RegisteredAddressMapping[msg.sender] = true;
        RegisteredSellerMapping[msg.sender] = true ;
        sellersCount++;
        SellerMapping[msg.sender] = Seller(msg.sender, _name, _age, _city, _aadharNumber,_panNumber);
        sellers.push(msg.sender);
    }

    function registerBuyer(string memory _name, uint _age, string memory _city, string memory _aadharNumber, string memory _panNumber) _onlyUnregisteredAddress public {
        //require that Buyer is not already registered

        RegisteredAddressMapping[msg.sender] = true;
        RegisteredBuyerMapping[msg.sender] = true ;
        buyersCount++;
        BuyerMapping[msg.sender] = Buyer(msg.sender, _name, _age, _city, _aadharNumber, _panNumber);
        buyers.push(msg.sender);

    }

    function updateSeller(string memory _name, uint _age, string memory _aadharNumber, string memory _panNumber) _onlyRegisteredSeller  public {
        //require that Seller is already registered
        SellerMapping[msg.sender].sellerName = _name;
        SellerMapping[msg.sender].age = _age;
        SellerMapping[msg.sender].aadharNumber = _aadharNumber;
        SellerMapping[msg.sender].panNumber = _panNumber;

    }

    function updateBuyer(string memory _name,uint _age, string memory _city,string memory _aadharNumber, string memory _panNumber) _onlyRegisteredBuyer public {
        //require that Buyer is already registered

        BuyerMapping[msg.sender].buyerName = _name;
        BuyerMapping[msg.sender].age = _age;
        BuyerMapping[msg.sender].city = _city;
        BuyerMapping[msg.sender].aadharNumber = _aadharNumber;
        BuyerMapping[msg.sender].panNumber = _panNumber;
        
    }

    function requestLand(address _sellerId, uint _landId) _onlyRegisteredBuyer _onlyVerified public{        
        requestsCount++;
        RequestsMapping[requestsCount] = LandRequest(requestsCount, _sellerId, msg.sender, _landId);
        RequestStatus[requestsCount] = false;
        RequestedLands[requestsCount] = true;
    }

    function approveRequest(uint _reqId) _onlyRegisteredSeller public {
        require(RequestsMapping[_reqId].sellerId == msg.sender);
        RequestStatus[_reqId] = true;

    }

    function landPayment(address payable _seller, uint _landId) public payable {
        require(lands[_landId].landPrice == msg.value, "payment is not equal to the land price");
        PaymentReceived[_landId] = true;
        _seller.transfer(msg.value);
    }

    function ownershipTransfer(uint _landId, address _newOwner) _paid(_landId) _onlyGovtOfficial public {
        LandOwner[_landId] = _newOwner;
    }  



}
