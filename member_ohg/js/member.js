function memberForm(){
  const f=document.member;
    
  const x=document.forms["member"]["name"].value;
  if (x==null || x=="")
     {
        alert("성명을 정확하게 입력해 주세요.");
        return false;
     }

  const y=document.forms["member"]["tel"].value;
  if(y==null || y=="" || y.includes("-")){
    alert("'-'없이 숫자만 입력해 주세요.")
    return false;
  }

  const reg_exp=new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{6,12}$");
  const match=reg_exp.exec(f.id.value);
  if(match==null){
    alert("아이디 형식이 올바르지 않습니다. \n영문과 숫자를 포함하여 6~12자로 입력해주세요.");
    return false;
  }

   const reg_exp1=new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$");
   const match1=reg_exp1.exec(f.pass.value);
    if(match1==null){
      alert("비밀번호 형식이 올바르지 않습니다. \n영문과 숫자를 포함하여 8~16자로 입력해주세요."); 
      return false;  
  }
   
   const x1=document.forms["member"]["pass"].value;
   const x2=document.forms["member"]["pass1"].value;
    if (x1!=x2){
      alert("비밀번호가 일치하지 않습니다. \n 다시 입력해주세요.");
      return false;
  }

  const y1=document.forms["member"]["email"].value;
   if (y1==null || y1=="")
  {
	alert("이메일을 입력하세요");
		return false;
  }

  const y2=document.forms["member"]["address"].value;
   if (y2==null || y2=="")
  {
	alert("주소를 입력하세요");
		return false;
  }


    alert("폼 제출 성공! (테스트용, PHP 없이 동작)");
    document.member.reset(); 
    return false;
}