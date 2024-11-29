class Accounts {
    accNumber:string
    accHolderName:string
    accType:string
    minBalance:number
    availableBalance:number
    bankName = 'HDFC Bank Private Ltd'

    constructor(accNumber, accHolderName, accType, minBalance) {
        this.accNumber = accNumber;
        this.accHolderName = accHolderName;
        this.accType = accType;
        this.minBalance = minBalance;
        this.availableBalance = minBalance;
    }

    getAccountInfo() {
        console.log(`Account holder name: ${this.accHolderName} Account number: ${this.accNumber} Account type: ${this.accType} Minimum balance required: ${this.minBalance} Available balance: ${this.availableBalance}`);
    }

    creditAmount(Amount:number) {
        let date = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        this.availableBalance += Amount
        console.log(`An amount of ${Amount} is credited to your account on ${date} ${time}. Available balance is ${this.availableBalance}`);
    }

    debitAmount(Amount:number) {
        let date = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        if (Amount <= this.availableBalance) {
            this.availableBalance -= Amount;
            console.log(`An amount of ${Amount} is debited from your account on ${date} ${time}. Available balance is ${this.availableBalance}`);
        }
        else {
            console.log('Insufficient balance.')
        }
        
    }

    getAvailableBalance() {
        console.log(`Available balance: ${this.availableBalance}`);
    }

}


let accountOne = new Accounts('07356274863', 'Naveen N G', 'Savings', 1000);







// accountOne.getAccountInfo();
// accountOne.creditAmount(1500);
// accountOne.getAvailableBalance()
// accountOne.debitAmount(2500);
// accountOne.getAvailableBalance();
