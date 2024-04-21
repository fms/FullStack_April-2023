import HiddenNavLink from "../HiddenNavLink/HiddenNavLink";

export default function NavBar() {
    return (
        <>
            <div>
                <HiddenNavLink to="/">Home</HiddenNavLink> <br/>
                <HiddenNavLink to="/user/1">User 1</HiddenNavLink> {" "}
                <HiddenNavLink to="/user/2">User 2</HiddenNavLink> {" "}
                <HiddenNavLink to="/user/3">User 3</HiddenNavLink> {" "}
                <HiddenNavLink to="/user/4">User 4</HiddenNavLink> {" "}
                <HiddenNavLink to="/user/5">User 5</HiddenNavLink>
            </div>
        </>
    );
}