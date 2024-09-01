"use client";

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login(){
    const router = useRouter();
    router.replace('/i/flow/login');
    return (
        <Main />
    );
}

// router.push
// localhost:3001 -> localhost:3001/login -> localhost:3001/i/flow/login
// 뒤로가기 시 문제가 됨(localhost:3001/login <-> localhost:3001/i/flow/login)

// router.replace
// localhost:3001 -> localhost:3001/login -> localhost:3001/i/flow/login
// 뒤로가기 시 히스토리 정리해줌(localhost:3001 -> () -> localhost:3001/i/flow/login)