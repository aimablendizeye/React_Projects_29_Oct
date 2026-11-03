// import PropType from 'prop-types'

function Student (props) {

    return (
        <div className="m-10  gap-2 bg-blue-300 rounded-lg w-fit p-4 item-center rou">
            <p className="font-bold text-2xl ">Name : {props.name}</p>
            <p className="font-semibold text-2xl ">Student : {props.isStudent ? "Yes" :"No"}</p>
            <p className="font-semibold text-2xl ">Address : {props.address}</p>
        </div>
    )
}

// Student.propType ={
//     name : PropType.string,
//     student : PropType.bool,
//     Address : PropType.string,
// }



export default Student;