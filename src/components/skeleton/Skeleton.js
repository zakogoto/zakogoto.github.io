import './Skeleton.sass'

export default function Skeleton() {
    return(
        <nav className="skeleton">
            <h2 className="skeleton__title">Please select a character to see information</h2>
            <div className="skeleton__wrap pulse">
                <div className="skeleton__cyrcle"></div>
                <div className="skeleton__line"></div>
                <div className="skeleton__line"></div>
                <div className="skeleton__line"></div>
            </div>
        </nav>
    )
}