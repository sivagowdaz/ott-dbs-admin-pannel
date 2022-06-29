import React, {useState, useEffect, useContext} from 'react'
import './userlist.css'
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/usercontext/UserContext';
import { get_all_users, delete_user } from '../../context/usercontext/apiCalls'
import { check_refresh_token, set_access_token } from '../../helper';


export default function UserList() {
   
    const { users, dispatch } = useContext(UserContext)
    
    useEffect(() => {
        const setRefreshToken = async() => {
            if (check_refresh_token()) {
                console.log("inside the inval")
                await set_access_token()
            }
        }
        setRefreshToken()
        get_all_users(dispatch)
    }, [dispatch])

    const handleDelete = async(email) => {
        if (check_refresh_token()) {
            console.log("inside the inval")
            await set_access_token()
        }
        console.log(email)
        delete_user(dispatch, email)
    }

  

   

    const columns = [
        { field: 'email', headerName: 'EMAIL', width: 260 },
        {
            field: 'username', headerName: 'Username', width: 150, renderCell: (params) => {
                return (
                    <div className='userListUser'>
                        <img src={params.row.profilePic} alt="" className='UserListImage' />
                        <span>{params.row.username}</span>
                    </div>
            )
        } },
        {
          field: 'createdAt',
          headerName: 'Create At',
          width: 200,
        },
        {
            field: 'updatedAt',
            headerName: 'Updated At',
            width: 200,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 120,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`user/${params.row.email} `}>
                            <button className="userListButton">Edit</button>
                        </Link>
                        <DeleteOutline className='userListDelete' onClick={() => handleDelete(params.row.email)}/>
                    </>
                )
            }
        }
      ];
      
      
    return (
        <div className='userList'>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                pageSize={8}
                getRowId={(r) => r.email}
            />
            <h3>djfdjfjd</h3>
           
        </div>
    )
}
