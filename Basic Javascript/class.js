//Problem (a) :

//class declaration
class Grade_Percentage{
    constructor(assignments,lab,project,final){
        this.assignments=assignments;
        this.lab=lab;
        this.project=project;
        this.final=final;
    }

    getGradeCalc(){
        console.log("Assignements(%):"+this.assignments+ "| Lab(%):"+this.lab+"| Project work(%):"+ this.project +"| final(%):"+this.final);
    }
}

var cmpe273=new Grade_Percentage(15,35,25,25);
cmpe273.getGradeCalc();

//class expression 
let Grade_Percentage1= class {
    constructor(assignments,lab,project,final){
        this.assignments=assignments;
        this.lab=lab;
        this.project=project;
        this.final=final;
    }

    getGradeCalc(){
        console.log("Assignements(%):"+this.assignments+ "| Lab(%):"+this.lab+"| Project work(%):"+ this.project +"| final(%):"+this.final);
    }
}
cmpe273=new Grade_Percentage1(15,35,25,25);
cmpe273.getGradeCalc();

//Problem (b) :
var staff1={
    name:"Amit",
    age:25,
    officeHours:"9AM-5PM",
    salary:35,
    designation: function(salary){
        if(this.salary<=25){
          return 1; 
        }else if(this.salary>25 && this.salary<=50){
          return 2;
        }else{
            return 3;
        }
    }
};
console.log(staff1);
console.log("Designation:"+staff1.designation());