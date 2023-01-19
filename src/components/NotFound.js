import React from 'react'

function NotFound({query}) {
    return (
        <div className="not_found">
            <div className="not_found_content">
                <h2>No result found for "{query}".</h2>
            </div>
        </div>
    )
}

export default NotFound
