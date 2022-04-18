import React from 'react'

export default function LayoutLogin() {
    return (
        <div>
            <form>
                <h1>Roaster</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
