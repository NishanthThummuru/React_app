export function Pagination({total, records, update, next, prev }){
    let n= Math.ceil(total/records)
    let page=[]
    for (let i=1; i<=n;i++){
page.push(i)
    }
    return (
        <div>
             <ul className=" pagination">
             <li className=" page-item">
                        <a href="#" className="page-link"  onClick={prev}><i class="fa-solid fa-left-long fa-xm"></i>Prev</a>
                    </li>
                {page.map((item)=>(
                    <li className=" page-item">
                        <a href="#" className="page-link" onClick={()=>{update(item)}}>{item}</a>
                    </li>
                    
                ))}
                  <li className=" page-item">
                        <a href="#" className="page-link" onClick={next} ><i class="fa-solid fa-right-long fa-xm"></i>Next</a>
                    </li>
             </ul>
        </div>
    )
}