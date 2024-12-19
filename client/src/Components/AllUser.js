import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'reactstrap';
import { getUsers, deleteUser } from '../Features/UserSlice';  // Import deleteUser
import { FaTrash } from 'react-icons/fa';

function AllUser() {
  // Ensure user is always an array, even if it is empty
  const user = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // Filter users with type 'U'
  const filteredUsers = user.filter((user) => user.type === 'U');

  // Handle delete action
  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(userId));  // Dispatch the deleteUser action
    }
  };

  return (
    <div className="postsContainer justify-content-center">
      <h1 className="text-muted text-center mb-3">All Users</h1>
      <Table className="table table-striped table-hover table-bordered mx-auto">
        <thead className="table-dark fs-4">
          <tr>
            <td>#</td> {/* Sequence Number Header */}
            <td>User Name</td>
            <td>Phone Number</td>
            <td>Email</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {/* Map through the filtered list of users */}
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td> {/* Display sequence number */}
                <td>{user.name}</td>
                <td>{user.phoneNo}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-danger"
                    style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                  >
                    <FaTrash size={20} style={{ color: 'black' }} /> {/* Set color to black */}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No users found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default AllUser;
