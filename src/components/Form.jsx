import React, { useState } from "react";

const Form = () => {
    const [form, setForm] = useState({});
    const url = new URL('https://63d304794abff88834170d21.mockapi.io/ss');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            });
            if (response.ok) {
                console.log('Product added successfully!');
            } else {
                console.error('Failed to add product');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    return (
        <div className="mask">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    name="title"
                    onChange={handleChange}
                    value={form.title || ''}
                    placeholder="Title:"
                    type="text"
                />
                <input
                    name="price"
                    onChange={handleChange}
                    value={form.price || ''}
                    placeholder="Price:"
                    type="text"
                />
                <input
                    name="oldPrice"
                    onChange={handleChange}
                    value={form.oldPrice || ''}
                    placeholder="Old Price:"
                    type="text"
                />
                <input
                    name="image"
                    onChange={handleChange}
                    value={form.image || ''}
                    placeholder="Image:"
                    type="text"
                />
                <textarea
                    name="description"
                    onChange={handleChange}
                    value={form.description || ''}
                    placeholder="Description:"
                    type="text"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
