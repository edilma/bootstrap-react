import  Button  from "react-bootstrap/Button"


/*
Component for the video
*/
export default function Content(){

    return(
        <>
        <h2>Content</h2>
        <Button variant="outline-primary" size="lg" active>Login</Button>
        <Button variant="outline-primary" size="lg" disable>Recovery Password</Button>

        </>
    )
}
