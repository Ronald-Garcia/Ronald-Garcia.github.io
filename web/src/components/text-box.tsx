
const TextBox = (props) => {
    return (
        <div className="
            transition ease-in-out duration-300 
            p-5
            md:w-[600px] w-[75%] mx-auto md:flex-initial
            hover:bg-slate-100 bg-slate-200 text-stone-800 rounded-[20px] border-single hover:scale-[101%] border-4 border-slate-200 hover:border-slate-300">
            

            {props.children}
        </div>
    );
}

export default TextBox;