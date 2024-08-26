import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import DashboardPage from "../views/DashboardPage.vue";
import RiwayatPage from "../views/RiwayatPage.vue";
import Module from "../views/ModulePage.vue";
// import KalenderPage from "../views/KalenderPage.vue";
import PermohonanPage from "../views/PermohonanPage";
import PengajuanPage from "../views/PengajuanPage";
import Presensi from "../views/PresensiPage";
import MasterData from "../views/MasterData";
import RolePage from "../views/RolePage";
import UserPage from "../views/UserPage";
import PosisiPage from "../views/PosisiPage";
import Dp from "../views/DepartementPage";
import Divisi from "../views/DivisiPage";
import Shift from "../views/ShiftPage";
import UbahProfile from "../views/EditProfilePage";
import ProfilePage from "../views/ProfilePage";
import Admin from "../views/AdminPage";
import RiwayatAll from "../views/RiwayatAll";
import DangerPage from "../views/DangerPage.vue";
const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    components: {
      default: DashboardPage,
    },
  },
  {
    path: "/Riwayat",
    name: "Riwayat",
    component: RiwayatPage,
  },
  {
    path: "/Riwayat/Rekapitulasi",
    name: "Riwayat/Rekapitulasi",
    component: RiwayatAll,
  },
  {
    path: "/Permohonan",
    name: "Permohonan",
    component: PermohonanPage,
  },
  {
    path: "/Pengajuan",
    name: "Pengajuan",
    component: PengajuanPage,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: ProfilePage,
  },
  {
    path: "/UbahProfile",
    name: "UbahProfile",
    component: UbahProfile,
  },
  {
    path: "/MasterData",
    name: "MasterData",
    component: MasterData,
  },
  {
    path: "/MasterUser",
    name: "MasterUser",
    component: UserPage,
  },
  {
    path: "/MasterRole",
    name: "MasterRole",
    component: RolePage,
  },
  {
    path: "/MasterPosisi",
    name: "MasterPosisi",
    component: PosisiPage,
  },
  {
    path: "/MasterDp",
    name: "MasterDp",
    component: Dp,
  },
  {
    path: "/MasterDivisi",
    name: "MasterDivisi",
    component: Divisi,
  },
  {
    path: "/MasterShift",
    name: "MasterShift",
    component: Shift,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/Module",
    name: "Module",
    component: Module,
  },
  {
    path: "/Presensi",
    name: "Presensi",
    component: Presensi,
  },
  // {
  //   path: "/Kalender",
  //   name: "Kalender",
  //   component: KalenderPage,
  // },
  {
    path: "/404",
    name: "DangerPage",
    component: DangerPage,
  },
];
const router = createRouter({
  history: createWebHistory( process.env.BASE_URL ),
  routes,
});

export default router;
