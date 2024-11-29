var Accounts = /** @class */ (function () {
    function Accounts(accNumber, accHolderName, accType, minBalance) {
        this.bankName = 'HDFC Bank Private Ltd';
        this.accNumber = accNumber;
        this.accHolderName = accHolderName;
        this.accType = accType;
        this.minBalance = minBalance;
        this.availableBalance = minBalance;
    }
    Accounts.prototype.getAccountInfo = function () {
        console.log("Account holder name: ".concat(this.accHolderName, " Account number: ").concat(this.accNumber, " Account type: ").concat(this.accType, " Minimum balance required: ").concat(this.minBalance, " Available balance: ").concat(this.availableBalance));
    };
    Accounts.prototype.creditAmount = function (Amount) {
        var date = new Date().toLocaleDateString();
        var time = new Date().toLocaleTimeString();
        this.availableBalance += Amount;
        console.log("An amount of ".concat(Amount, " is credited to your account on ").concat(date, " ").concat(time, ". Available balance is ").concat(this.availableBalance));
    };
    Accounts.prototype.debitAmount = function (Amount) {
        var date = new Date().toLocaleDateString();
        var time = new Date().toLocaleTimeString();
        if (Amount <= this.availableBalance) {
            this.availableBalance -= Amount;
            console.log("An amount of ".concat(Amount, " is debited from your account on ").concat(date, " ").concat(time, ". Available balance is ").concat(this.availableBalance));
        }
        else {
            console.log('Insufficient balance.');
        }
    };
    Accounts.prototype.fundTransfer = function (AccNo, Amount) {
        var accountObj = AccountsObjs.find(function (Obj) { return Obj.accNumber == AccNo; });
        if (accountObj) {
        }
        else {
            console.log('No matching account found.');
        }
    };
    Accounts.prototype.getAvailableBalance = function () {
        console.log("Available balance: ".concat(this.availableBalance));
    };
    return Accounts;
}());
var accountOne = new Accounts('07356274863', 'Naveen N G', 'Savings', 1000);
var accountTwo = new Accounts('14536834978', 'Namitha N G', 'Current', 0);
var AccountsObjs = [accountOne, accountTwo];
accountOne.fundTransfer('15366538675', 200);
// accountOne.getAccountInfo();
// accountOne.creditAmount(1500);
// accountOne.getAvailableBalance()
// accountOne.debitAmount(2500);
// accountOne.getAvailableBalance();
