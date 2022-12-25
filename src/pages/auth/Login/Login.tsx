import { Divider, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "components";
import { MdVpnKey } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const Login = () => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === "fa-IR";

  return (
    <Paper
      dir={isRtl ? "rtl" : "ltr"}
      className="pb-8 pt-3 w-96 h-96 bg-default bg-opacity-30 rounded-tl-3xl flex flex-col justify-around items-center"
      elevation={3}
    >
      <Grid className="flex flex-col w-56 ">
        <Grid className="flex flex-col justify-center mb-8">
          <Typography className="text-lg text-txtWhite">Title</Typography>
          <Divider className="bg-txtWhite" />
        </Grid>
        <TextField
          label="User Name"
          variant="filled"
          className="mb-8 bg-white rounded-md"
          InputLabelProps={{
            className: "text-primary",
          }}
          InputProps={{
            className: "text-txtDark h-12",
          }}
        />
        <TextField
          label="Password"
          type="password"
          variant="filled"
          className="mb-4 bg-white rounded-md"
          InputLabelProps={{
            className: "text-primary",
          }}
          InputProps={{
            className: "text-txtDark h-12",
          }}
        />
      </Grid>
      <Grid className="w-56 flex flex-col justify-center items-end ">
        <Button
          variant="contained"
          fullWidth
          className="bg-info  font-semibold text-txtDark"
        >
          {t("login")}
        </Button>
        <Grid className="flex items-center justify-center mt-4">
          <Typography className="text-xs text-txtWhite mx-1">
            {t("Forgot password")}
          </Typography>
          <MdVpnKey fontSize="small" className="text-txtWhite" />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Login;
