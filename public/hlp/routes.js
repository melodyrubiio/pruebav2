import { HomeView } from "../views/private/homeview";
import { LoginView } from "../views/public/loginview";
import { RegisterView } from "../views/public/register.view";
export const Routes = {
    public: [
        { path: "/Login", component: LoginView },
        { path: "/Register", component: RegisterView },
    ],
    private: [
        { path: "/home", component: HomeView },
    ]
};
