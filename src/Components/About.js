import React , {useState} from 'react'


export default function About(){

    const [mystyle , Setstyle] = useState({
       color: "black",
       backgroundColor: "white",
       border: '2px solid blue'
       
    })

    const [classlight , classchange] = useState("btn btn-dark my-3")

    const [btntxt , setbtntext] = useState("Enable Dark Mode")

    const handleclick= ()=>{
        if(mystyle.color === "black"){
            Setstyle({
              color:"white",
              backgroundColor:"black",
              border:'1px solid white'
            })
            setbtntext("Enable Light Mode")
            classchange("btn btn-light my-3")
        }

        else{
          Setstyle({
            color:"black",
            backgroundColor:"white",
            border: '2px solid blue'
          })
          setbtntext("Enable Dark Mode")
          classchange("btn btn-dark my-3")
        }
    }

    return (
      <>
      <div className='continer' style={mystyle}>
        <h1  className='h1 mx-3'>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample" style={mystyle} >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={mystyle}>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                first item's accordion body.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={mystyle}>
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body" style={mystyle} >
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      

      </div>

      <div>
        <button onClick={handleclick} type="button" className={classlight} >
          {btntxt}
        </button>
      </div>

      </>
    );
}

