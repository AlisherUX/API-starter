import React, { useEffect, useState } from "react";

const About = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    console.log(data);

    return (
        <div className="container">
            {data?.map((el) => {
                return (
                    <div className="wrapper" key={el.id}>
                        <i className="comment">{el.body}</i>
                        <b className="name">{el.name}</b>
                        <a className="email" href={`mailto:${el.email}`}>{el.email}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default About;