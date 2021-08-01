const students = [
    { name: "Adhi", gender: "male" },
    { name: "Ahamed", gender: "male" },
    { name: "Rutika Kadam", gender: "female" },
    { name: "Priyadharsini", gender: "female" },
  ];
  var female=(arr)=>
  { 
    let count=0;
      console.log("Value infuction "+arr.gender);
      console.log("Value infuction "+arr.name);
      if(arr.gender=="female")
      {
          return arr.name;
      }
  
      
  
      
  
     // return count;
  }
  
  
  var startname = (arr)=>{
    if(arr.gender=="male")
    {
      return arr.name;
        
    }
  
  }
  
  var countmale =(arr)=>{
  
    if(arr.name.charAt(0)=="A")
    {
      return arr.name;
        
    }
  }
  
  console.log(students.filter(female)); 
  console.log(students.filter(startname).length); 
  console.log(students.filter(countmale)); 