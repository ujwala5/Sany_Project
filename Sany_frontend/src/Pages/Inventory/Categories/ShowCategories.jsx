import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ShowCategories() {
    const [showCategory, setShowCategory] = useState([]);

    const navigate = useNavigate();

    const fetchCategories = async () => {
        try {
            const res = await fetch('http://localhost:8991/V2/categories', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = await res.json();
            console.log(result);

            setShowCategory(result.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleClick = () => {
        navigate('/addCategory');
    };

    const delCategory = async (catId) => {
        try {
            const deleteCatApi = await fetch(`http://localhost:8991/V2/categories/delete?Categoryid=${catId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            toast.success('Category deleted successfully');
            setTimeout(() => {
                window.location.reload();
            }, 3000);

            console.log("deleteCatApi==>", deleteCatApi);
        } catch (err) {
            toast.error('Something went wrong')
        }
    }

    return (
        <div className="container mt-4">
            <button type="button" className="btn btn-dark mb-3" onClick={handleClick}>
                Create Category
            </button>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>Sr. no</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {showCategory.map((item, index) => (
                        <tr key={item.catid || index}>
                            <td>{index + 1}</td>
                            <td>{item.catid}</td>
                            <td>{item.catname}</td>
                            <td>{item.catstatus}</td>
                            <td>
                                {/* Placeholder for future action buttons */}
                                <button className="btn btn-sm btn-primary me-2">Edit</button>
                                <button className="btn btn-sm btn-danger" onClick={() => delCategory(item.catid)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowCategories;
