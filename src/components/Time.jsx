export function Time({color}){

    return(
        <div className={`${color === 'red' ? ' bg-[linear-gradient(350deg,#FF285E,#FF7699)]' : 'bg-[linear-gradient(350deg,#007AED,#4AA7FF)]'} 
         w-80 h-96 flex justify-center items-center rounded-3xl text-2xl cursor-pointer transition ease-linear`}>
        </div>
    )
}