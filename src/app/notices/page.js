import NoticePage from "@/components/NoticePage";
import Notice from "@/models/Notice";
import sequelize from "@/lib/sequelize";
import NoticeBoard from "@/components/NoticeBoard";

export default async function Notices() {
    const notices = await Notice.findAll();
    console.log("notices", notices);
    
    return <NoticeBoard />
}