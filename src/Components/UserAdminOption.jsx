const UserAdminOption = () => {
    return (
        <>
            <div className="container vh-100 d-flex justify-content-center align-items-center">

                <div className="d-flex gap-3">

                    <div class="card" style={{ width: '18rem' }}>
                        <a href="/user">
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="card-img-top" alt="..." />
                        </a>
                        <div class="card-body">
                            <p class="card-text text-center">User Login</p>
                        </div>

                    </div>

                    <div class="card " style={{ width: '18rem' }}>
                        <a href="/adminlogin">
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" class="card-img-top" alt="..." />
                        </a>

                        <div class="card-body">
                            <p class="card-text text-center">Admin Login</p>
                        </div>

                    </div>

                </div>


            </div>


        </>
    );
}

export default UserAdminOption;