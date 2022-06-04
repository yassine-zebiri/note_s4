export default class App{
    constructor(data){
        this.data=data;
        this.arr=[];
        this.coff_UEF=0;
        this.coff_UEM="";
        this.coff_UED=0;
        this.coff_UET2=0;
        data.forEach((item)=>{
            item.value=0;
            item.max=20;
            item.min=0;
            this.arr.push(item.value)
        })
    }
    t1(v1,v2){
        return eval(0.67*this.arr[v1] +0.33*this.arr[v2]).toFixed(2);
    }
    t2(v1,v2){
        return eval(0.5*this.arr[v1]+0.5*this.arr[v2]);
    }
    getData(input){
        input.forEach((element,index) => {
            element.addEventListener('change',()=>{
                this.arr[index]=element.value
            })
        });
    }
    coff1(m){
        let arr=[2,3,3]
        let coff=0
        for (let index = 4; index < 7; index++) {
            if(Number(m[index].textContent)>=10 && this.coff_UEM<8){
                coff+=arr[index-4];
            }
        }
        return (coff);
    }
    coffF(m){
        let arr=[6,6,4,4]
        let coff=0
        for (let index = 0; index < 4; index++) {
            if(Number(m[index].textContent)>=10 && this.coff_UEM<8){
                coff+=arr[index];
            }
        }
        return (coff);
    }

    UEF(m){
        let arr=[];
        for (let index = 0; index <4; index++) {
            arr.push(Number(m[index].textContent));
        }
        return (((arr[0]*3+arr[1]*3+arr[2]*2+arr[3]*2)/10).toFixed(2));
        
    }
    UEM(m){
        let arr=[];
        for (let index = 5; index < 8; index++) {
            arr.push(Number(m[index].textContent));
        }
        return ((arr[0]+arr[1]*2+arr[2]*2)/5).toFixed(2);
    }
    moy_S(m){
        let arr=[];
        m.forEach(element => {
            arr.push(Number(element.textContent));
        });
       // console.log(arr);
        return ((arr[0]*6.67+arr[1]*2.33+arr[2]*0.67+arr[3]*0.33)/10).toFixed(2);

    }
    coff(m){
        let coff=0;
        let arr2=[6,6,4,4,2,3,3,2,1]
        for (let index = 0; index < m.length; index++) {
            if(Number(m[index].textContent)>=10 ){
                coff+=arr2[index];
            }
        }
        if(coff>=30){
            return (30);
        }else{
            return (coff);
        }
        

    }
    
}
