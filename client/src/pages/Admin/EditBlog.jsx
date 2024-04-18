import React,{useEffect,useState} from 'react'
import { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditBlog = () => {
    const initialState = { Title: "", Comments: "", Category: "" }
    const [blog, setBlog] = useState(initialState);
    const [img, setImg] = useState(null);
    // let [cat, setCategory] = useState("")
    let [categories, setCategories] = useState([])
    const imgRef = useRef();
    const { Title, Comments, Image, Category } = blog
   
    let redirect = useNavigate();
    const { id } = useParams()

    let getCategories = () => {

        axios.get('http://localhost:5000/category/getAllCategories')
            .then((res) => {
                // console.log(res.data);
                setCategories(res.data.data)
            })

            .catch((err) => {
                console.log(err);
            })
            }

            const getSingleBlog = async () => {
                await axios.get('http://localhost:5000/blog/GetSingleBlog/' + id)
                    .then((resp) => {
                        // console.log(resp.data);
                        setBlog(resp.data.data)
                        // setCategory(resp.data.Category)
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }

            let updateBlog = () => {
                let formData = new FormData()
        
                formData.append('Title', Title)
                formData.append('Comments', Comments)
                formData.append('Category', Category._id ? Category._id : blog.Category)
                formData.append('Image', imgRef.current.files[0] ? imgRef.current.files[0] : blog.Image)
               
        
                // Display the key/value pairs
                // for (var pair of formData.entries()) {
                //     console.log(pair[0] + ', ' + pair[1]);
                // }
        
        
                axios.put('http://localhost:5000/blog/UpdateBlog/' + id, formData)
                    .then((res) => {
                        // console.log(res.data.Data);
                        redirect('/GetAllBlogs')
                        alert('Updated Succesfullly')
                    })
        
                    .catch((err) => {
                        console.log(err);
                    })      
                 }
                     

                   let handleChange = (e) => {
                    const { name, value } = e.target
                    setBlog({ ...blog, [name]: value })
                    // Category._id = e.target.value
                    // setCategory(e.target.value)
                    }
            
            
                const handleImg = (m) => {
                    setImg(m.target.files[0])
                }

                let handleSubmit = (e) => {
                    e.preventDefault()
                    updateBlog()
                }


  useEffect(()=>{
       getCategories()
       getSingleBlog()
  },[])

  return (
    <>

            <Form
            style={{width:"50%",border:"ridge",marginLeft:"30%",borderRadius:"20px",background:"#F8F6E3",boxShadow:"1px 1px 12px 10px gray",height:"800px"}}
             encType='multipart/form-data' onSubmit={handleSubmit}>

                     <select             
                    style={{ background: "#8B93FF", color: "white", border: "none", height: "40px", width: "260px", fontWeight: "500", borderRadius: "7px",marginLeft:"30%",marginTop:"5%"}}
                    // value={Category?.name}
                    // defaultValue={Category.name}
                    name='Category'
                    onChange={handleChange}
                     >

                    {
                        categories.map((i, k) => (
                            <option selected={Category.name === i.name ? true : false} key={k} value={i._id}>
                                {i.name}
                            </option>
                        ))
                    }
                </select>  <br /><br />


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label
                    style={{marginLeft:"25%",fontWeight:"500",marginTop:"5%"}}
                    >
                        Name :
                    </Form.Label>

                    <Form.Control
                     style={{marginLeft:"25%",background:"#F1EEDC",color:"#76453B"}}
                     className='w-50' 
                    name='Title'
                     onChange={handleChange}
                      value={Title} type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label
                    style={{marginLeft:"25%",fontWeight:"500"}}
                    >
                        Comments :
                        </Form.Label>
                    <Form.Control
                     style={{marginLeft:"25%",background:"#F1EEDC",color:"#76453B"}}
                        className='w-50'
                        name='Comments'
                        onChange={handleChange}
                        value={Comments}
                        type="number"
                         placeholder="Comments" />
                </Form.Group>

                <div style={{marginLeft:"30%",marginTop:"5%"}}>
                <input maxsize={1000} ref={imgRef} type='file' name='Image' onChange={handleImg} />

                
                <img src={"http://localhost:5000/uploads/Images/" + Image} alt='' style={{ borderStyle: '', height: '130px', width: '170px', position: "absolute", left: "630px", top: "355px" }}
                    className={img ? 'none' : 'block'}
                />
                <br />

                <img alt=''
                    src={img && window.URL.createObjectURL(img)}
                    style={{ height: '130px', width: '170px', marginLeft: "20px" }}
                /> 
                 </div>  <br />

                 <Button style={{marginLeft:"35%",width:"150px"}} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
   
    
    </>
  )
}

export default EditBlog