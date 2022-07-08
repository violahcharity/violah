let num=86;
if(num>=0&&num<=32){
    console.log("F")
}
else if(num>33&&num<39){
    console.log("D")
}
else if(num>40&&num<49){
    console.log("D+")
}
else if(num>50&&num<59){
    console.log("B")
}
else if(num>60&&num<69){
    console.log("B+")
}
else if(num>70&&num<79){
    console.log("A-")
}
else if(num>80&&num<100){
    console.log("A")
}
else{
    console.log(INVALID)
}