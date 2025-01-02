const DefaultProps1 =({var1,var2,var3})=>(
    <button disabled={var1 }
    style={{background:var2}}>
        {var3}
    </button>
    
)
DefaultProps1.defaultprops = {
    var1:false,
    var2:"green",
    var3:"Submit",
}
export default DefaultProps1;