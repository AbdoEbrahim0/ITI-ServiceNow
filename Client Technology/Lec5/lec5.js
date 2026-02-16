
// function pow(num,powered)
// {
//     let out=num;
//     for(let i=1;i<=powered;i++)
//     {
//      num=out*num;   
//     }
//     return num;
// }
// // let x=2;
// // let Mypow=4;
// let out=pow(2,3);
// console.log(out);


//task 4

let continueSystem=1;
let studentArr=[]
while(continueSystem)
{
    let name=prompt("Enter your student name");
        let age=prompt("Enter your age name");
        let grades=[];
        let gradesCalssification=[];

        while (true) {
            let grade=prompt("enter grade if you want to continue else type (stop)");
            if( grade.toLowerCase() === "stop")
            {
                if(grades.length<3)
                alert("you must enter 3 grades at least")
                else
                break;
            }
            let gradeAsNumber=Number(grade);
            if(! isNaN(grade))
                {
                    if(! (grade >=0 && grade<=100)){
                        alert("pls enter number between 0 and 100")
                    }
                    else
                    {
                        grades.push(grade);
                        if(grade>90)
                            {   gradesCalssification.push("Excellent"); }
                        else if(grade>80)
                            {   gradesCalssification.push("Very Good"); }
                        else if(grade>70)
                            {   gradesCalssification.push("Good"); }
                        else if(grade>60)
                        {   gradesCalssification.push("pass"); }
                        else
                            {   gradesCalssification.push("fail"); }
                    }                        
                }
        };
        alert(grades);
        // grades.pop();

        let sum=0,maxi=grades[0],mini=grades[0];
        for(let i=0;i<grades.length;i++)
        {
        sum+=Number(grades[i]);
        if(Number(grades[i])> Number(maxi))
        maxi=Number(grades[i]);
        if(Number(grades[i])<Number (mini))
        mini=Number(grades[i]);
        }


        let avg= sum /grades.length;
        let student ={nameObj:name,ageObj:age}

        student.gradesObj=grades;
        student.gradesCalssificationObj=gradesCalssification;
        student.Myavg=avg ;student.Mymax=maxi ; student.Mymin=mini;
        
        // alert(
        // `" name:${student.nameObj} \n" ,age ${student.ageObj} \n",total num of Grades: ${student.grades.length} \n , grades: ${student.gradesObj} \n,Class:${student.gradesCalssificationObj}\n ,av: ${student.avg} \n", max: ${student.Mymax} \n, min: ${student.Mymin} \n"`
        // )

        alert(
        `name: ${student.nameObj}\n
        age: ${student.ageObj}\n
        total num of Grades: ${student.gradesObj.length}\n
        grades: ${student.gradesObj}\n
        Class: ${student.gradesCalssificationObj}\n
        avg: ${student.Myavg}\n
        max: ${student.Mymax}\n
        min: ${student.Mymin}`
        );

        studentArr.push(student)
        continueSystem=confirm("Do you want to enter another student?")
}
for (let i=0 ;i<studentArr.length;i++)
{
    console.log(studentArr[i]);
}    
