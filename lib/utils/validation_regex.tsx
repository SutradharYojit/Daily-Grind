import { SetStateAction } from "react";
import { StringManager } from "../resources/string_manager";

export class RegexExp {
    static emailRgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    static passRgx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
}

export class Validations {

    validateFilled = (validateText: string, regex: RegExp) => {
        const pattern = regex;
        return pattern.test(validateText);
    };

    emailValidate = (Text: string, setMail: any, setEmailWarn: any) => {
        setMail(Text);
        if (Text === "") {
            setEmailWarn(StringManager.emailRequiredTxt);
        }
        else if (!this.validateFilled(Text, RegexExp.emailRgx)) {
            setEmailWarn(StringManager.emailInvalidTxt);
        }
        else {
            setEmailWarn("");
        }
    };

    passValidate = (Text: string, setPass: any, setPassWarn: any) => {
        setPass(Text)
        if (Text === "") {
            setPassWarn(StringManager.passRequriedTxt)
        }
        else if (Text.length < 4) {
            setPassWarn(StringManager.passshortTxt)
        }
        else if (!this.validateFilled(Text, RegexExp.passRgx)) {
            setPassWarn(StringManager.passInvalidTxt)
        }
        else {
            setPassWarn("")
        }
    }
}
