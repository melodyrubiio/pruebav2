var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class UserRegister {
    registerUser(url, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            window.location.href = "../views/login.html";
            console.log(response);
            alert('Usuario registrado :)');
        });
    }
}
export class UserVerifications {
    inputsVerification(user) {
        const { email, password } = user;
        if (!email || !password) {
            return false;
        }
        return true;
    }
}
