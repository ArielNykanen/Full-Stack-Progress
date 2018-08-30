//page 43 exercise 4  ===============================================
  //if worker is has 10 years seniority then 10% more to the salary
  //if worker has more 4 to 6 included childrens then he get 400 plus to salary
  //if worker has 7 or more childrens then he gets 700 plus to salary
  //over 160 hours its tosafot hours
  //for every hour in 16 tosafot its 80 for every hour
  // if its over 16 tosafot so its 120 for every additional hour
  function MakeWorkers(Name, BaseSalary, Seniority, NumOfKids, WorkHours){
    this.Name = Name;
    this.BaseSalary = BaseSalary;
    this.Seniority = Seniority;
    this.NumOfKids = NumOfKids;
    this.WorkHours = WorkHours;
  }


  function addWorker(){
    let worker1 = new MakeWorkers(prompt('enter name'), parseInt(prompt('enter the base salary')), parseInt(prompt('enter the seniority')),
    parseInt(prompt('enter the number of kids')), parseInt(prompt('enter the corrent work hours')));
    let getSalary = salaryMaking(worker1);
    alert(worker1.Name + ' salary is ' + getSalary);
}



  function salaryMaking(worker){
     debugger;
      let totalSalary = worker.BaseSalary;
      if (worker.Seniority > 10){
          totalSalary += totalSalary*0.10;
      }
    for(i = worker.NumOfKids;i > 3;i--){
        if(i >= 7){
            totalSalary += 700;
        }else{
            totalSalary += 400
        }
    }
    console.log(totalSalary);
    for(i = worker.WorkHours;i > 160;i--){
        if(i > 176){
            totalSalary += 120;
        }else if(i > 160){
            totalSalary += 80;
            console.log(totalSalary);
        }
    }
    console.log(totalSalary);
    return totalSalary;
  }



//End of exercise 4 --------------------------------------------------

//page 43 exercise 5  ===============================================
function CompanyAdd(CompanyName, BrokenBottles, LostBottles){
    this.CompanyName = CompanyName;
    this.BrokenBottles = BrokenBottles;
    this.LostBottles = LostBottles;
  }


  function addCompany(){
    let company1 = new CompanyAdd(prompt('enter the companys name'), parseInt(prompt('enter the number of broken bottles')), parseInt(prompt('enter the number of lost packs')))
    let getFeesToPay = feesToPay(company1);
    alert(company1.CompanyName + ' fees to pay is ' + getFeesToPay);
}



  function feesToPay(company){
    //  debugger;
      let bottlesPrice = 10;
      let totalFees = 0;
    for(i = company.BrokenBottles;i > 3;i--){

        if(i > 10){
            totalFees += bottlesPrice*4;
            company.BrokenBottles -= 10;
        }else if ((i < 10) && (i >= 6)){
            totalFees += bottlesPrice*2
            company.BrokenBottles -= 4;

        }else if ((i >= 3) && (i < 5)) {
            totalFees += bottlesPrice;
            company.BrokenBottles -= 2;
        }
           
        
    }
    for(i = company.LostBottles;i >= 1;i--){
        totalFees += 10*bottlesPrice;
    }
    return totalFees;
}
   


//End of exercise 5 --------------------------------------------------