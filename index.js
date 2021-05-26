// Creating array to store randomly generated numbers
let array = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars = 60) {
    // calling helper function to delete old bars from dom
    deleteChild();

    // creating an array of random numbers 
    array = [];
    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 250) + 1);
    }
    console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < noOfBars; i++) {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

function waitforme(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

function swap(el1, el2) {
    console.log('In swap()');
    
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
    
}


//Bubble Sort
async function Bubblesort() {
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        for(let j = 0; j < ele.length-i-1; j++){
            
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(20);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        
    }
}


//SelectionSort
async function selectionsort()
{
    const ele=document.querySelectorAll(".bar");
    for(var i=0;i<ele.length-1;i++)
    {
        for( var j=i+1;j<ele.length;j++)
        {
            ele[i].style.background = 'blue';
            ele[j].style.background = 'blue';

            if(parseInt(ele[j].style.height)<parseInt(ele[i].style.height))
            {
                await waitforme(20);
                swap(ele[i],ele[j]);
            }

            ele[i].style.background = 'cyan';
            ele[j].style.background = 'cyan';

        }
    }
}


//insertionSort
async function insertionsort()
{
    const ele=document.querySelectorAll(".bar");
    for(var i=1;i<ele.length;i++)
    {
        var k=ele[i].style.height;
        var j=i-1;
        
        
        while(j>=0 && parseInt(ele[j].style.height)>parseInt(k))
        {
            ele[j].style.background = 'blue';

           
            
                await waitforme(20);
                ele[j+1].style.height=ele[j].style.height;
            

        
            ele[j+1].style.background = 'cyan';
            j--;

        }
        ele[j+1].style.height=k;
        ele[j+1].style.background = 'cyan';
    }
}


//Merge Sort
var delay=20;
async function merge(ele, low, mid, high){
    
    const n1 = mid - low + 1;
    const n2 = high - mid;
    
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await waitforme(delay);
        
        // color
       ele[low + i].style.background = 'blue';
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await waitforme(delay);
        
        // color
        ele[mid + 1 + i].style.background = 'blue';
        right[i] = ele[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await waitforme(delay);
       
        if(parseInt(left[i]) <= parseInt(right[j])){
            
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await waitforme(delay);
       
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await waitforme(delay);
        
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r){
    console.log('In mergeSort()');
    if(l >= r){
        console.log(`return cause just 1 elemment l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    console.log(`left=${l} mid=${m} right=${r}`, typeof(m));
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

async function MergeSort()
{
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    
    await mergeSort(ele, l, r);
    
}



//Quick Sort

async function partitionLomuto(ele, l, r){
    
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'blue';
    for(let j = l; j <= r - 1; j++){
        
        // color current element
        ele[j].style.background = 'blue';
        // pauseChamp
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'blue';
            if(i != j) ele[j].style.background = 'blue';
            // pauseChamp
            await waitforme(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'blue';
        }
    }
    i++; 
    // pauseChamp
    await waitforme(delay);
    swap(ele[i], ele[r]); // pivot height one
    
    // color
    ele[r].style.background = 'blue';
    // pauseChamp
    await waitforme(delay);
    return i;
}

async function quickSort(ele, l, r){
   
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    
    
}

async function QuickSort(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    
    await quickSort(ele, l, r);
    
}


   


