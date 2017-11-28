import { Observable } from 'rxjs/Observable'; 
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
//import{ Observable}  from 'rxjs';  
/* here we are including all the rxjs observable,operators etc. 
 * which increase the file size to load in bowser
 */

let number = [3,5,7,8,9];
/*
let source = Observable.from(number); //observable as data source which is a stream of number

// this is more formal way of doing
// the observable is listen to each number that is comming to the next method
class MyObservable implements Observer<number> {  
    next(value){
        console.log(`value: ${value}`);
    }
    error(e){
        console.log(`error occured: ${e}`);
    }
    complete(){
        console.log('complete');
    }
}
source.subscribe(new MyObservable()); // we are binding togther to generate output
*/

// creating number array to work like asynchornous function
let creatSource = Observable.create(observer =>{
    let index = 0;
    let produceValue = () =>{
        observer.next(number[index++]);
        if(index < number.length){
            setTimeout(produceValue,2000);
        }else{
            observer.complete();
        }
    }
    produceValue();
}).map(n => n * 10) //here multiplying the number with ever number by 10 which each time observerable recieve value 
  .filter(n => n < 80);
creatSource.subscribe(
    value => console.log(`value:${value}`),
    e => console.log(`error: ${e}`),
    () => console.log(`completed`)
)

