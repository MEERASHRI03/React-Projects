
function compare()
{
    const name1="Kabil";
    const name2="Kabil";
    const object1={name:"Kabil"};
    const object2={name:"Kabil"};
    console.log(name1===name2);
    console.log(name1===object1);
    console.log(object1===object2);
}
function Equal()
{
    return(
        <div>
        <h1>Let we see the output of JAVASCRIPT</h1>
        <button onClick={compare}>Click</button>
        </div>
    );
};
export default Equal;