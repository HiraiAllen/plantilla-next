export default function Maqueta({ children, props }) {
    return (
        <div className={props}>
            <h1 className="mb-3 text-2xl font-semibold">This is another component</h1>
            {children}
        </div>
    );
}