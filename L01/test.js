/**
 * Created by Administrator on 2017/1/10.
 */
var a=function (){
    for(var i=1;i<=9;i++){
        for(j=1;j<=i;j++){
            process.stdout.write(j+"*"+i+"="+i*j+"  " );
        }
        console.log('\n');
    }
}
a();

