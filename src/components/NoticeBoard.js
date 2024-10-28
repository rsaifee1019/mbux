"use server"
import Notice from "@/models/Notice";

import NoticeBoardClient from "@/components/NoticeBoardClient";
import { Suspense } from "react";

export default async function NoticeBoard() {
    

  
     const notices = await Notice.findAll();

console.log("notices", notices);
    

    return <Suspense fallback={<div>Loading...</div>}>
      <h1>Notices</h1>
    </Suspense>
}