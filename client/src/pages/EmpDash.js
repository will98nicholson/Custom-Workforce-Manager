import React from 'react'


function EmpDash(props) {
    console.log(props);
    return (
        <>
            <p>Hello User: {props.user.username}</p>
            {/* <Header />
            <Table />
            <Notes /> */}
        </>
    );
};

export default EmpDash;