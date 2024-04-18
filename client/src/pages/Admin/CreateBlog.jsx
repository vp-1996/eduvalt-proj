import React,{useEffect,useRef,useState} from 'react'
import BasicExample from '../../components/NavBar'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdminNav from '../../components/adminNav';

const CreateBlog = () => {

  const initialState = {Title: "", Comments: "", Category: "" }
  const [blog,setBlog] = useState(initialState);
  const [img, setImg] = useState(null);
  let [cat, setCategory] = useState([])
  const imgRef = useRef();
  const {Title,Comments,Category} = blog
  
  // console.log(cat);
  let getCategories = async () => {

    await axios.get('http://localhost:5000/category/getAllCategories')
          .then((res) => {
           console.log(res.data);
            setCategory(res.data.data)
        })

        .catch((err) => {
            console.log(err);
        })
}


let addBlog = ()=>{

   let formData = new FormData()
   formData.append('Title',Title)
   formData.append('Comments',Comments)
   formData.append('Category',Category)
   formData.append('Image', imgRef.current.files[0])

   axios.post('http://localhost:5000/blog/createBlog',formData)
      .then((res)=>{
        alert('Added Sucessfully')
      })
      .catch((err)=>{
          console.log(err);
      })

    }

    let handleChange = (e) => {
      const { name, value } = e.target
      setBlog({ ...blog, [name]: value })
      // console.log(setCourse({ ...course, [name]: value }));
  }

  const handleImg = (m) => {
    setImg(m.target.files[0])
}


  let handleSubmit = (e) => {
    e.preventDefault()
    addBlog()
}


useEffect(()=>{
  getCategories()
 // console.log(cat);
},[])



  return (
    <>
    <AdminNav/>
    
    <Form
             style={{width:"50%",border:"ridge",marginLeft:"30%",borderRadius:"20px",background:"#F8F6E3",boxShadow:"1px 1px 12px 10px gray",height:"700px",marginTop:"5%"}}
              encType='multipart/form-data' onSubmit={handleSubmit}>

                    <select
                    required
                    style={{ background: "#8B93FF", color: "white", border: "none", height: "40px", width: "260px", fontWeight: "500", borderRadius: "7px",marginLeft:"30%",marginTop:"5%"}}
                    value={Category}
                    name='Category'
                    onChange={handleChange}>
                    <option value='' disabled>Select Category</option>
                    {
                        cat.map((i, k) => (
                            <option value={i._id}>
                              {i.name}
                              </option>
                        ))
                    }
                </select>  <br /><br />

    

                <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                    <Form.Control
                        style={{marginLeft:"25%",background:"#F1EEDC",color:"#76453B"}} 
                        className='w-50'
                        maxLength={20}
                        name='Title'
                        value={Title}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Description(max 20 char allowed)"
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        style={{marginLeft:"25%",background:"#F1EEDC",color:"#76453B"}} 
                        className='w-50'
                        required
                        min={1}
                        name='Comments'
                        value={Comments}
                        onChange={handleChange}
                        type="number"
                        placeholder="Enter Number Of Comments"
                    />
                </Form.Group>


                    <div style={{marginLeft:"30%",marginTop:"5%"}}>
                <input maxsize={1000} ref={imgRef} type='file' name='Image' onChange={handleImg} /> <br/> <br/>

                <img alt=''
                    src={img && window.URL.createObjectURL(img)}
                    style={{ height: '130px', width: '170px', marginLeft: "20px" }}
                /> <br />
                        </div>
                        <br/>

                <Button style={{marginLeft:"35%",width:"150px"}} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
                <br/>
    
    </>
  )
}

export default CreateBlog