// pages/SigninPage.tsx
import { Button, Stack, TextField, Typography, Alert } from "@mui/material";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useAuthForm } from "../hooks/useAuthForm";
import { loginUser } from "../../../store/slice/userSlice";
import Container from "../../../components/Container";
import AppLink from "../../../components/CustomLink";

const SigninPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, error, setError, handleChange, validate } = useAuthForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      dispatch(loginUser(formData as any));
      navigate("/");
    } catch {
      setError("Invalid email or password");
    }
  };

  return (
    <Container heading="Login">
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {error && <Alert severity="error">{error}</Alert>}

          <TextField name="email" label="Email address" type="email" variant="standard" fullWidth value={formData.email} onChange={handleChange} />

          <TextField name="password" label="Password" type="password" variant="standard" fullWidth value={formData.password} onChange={handleChange} />

          <Button type="submit" size="large" variant="contained">
            Sign in
          </Button>

          <Typography sx={{ textWrap: "nowrap", display: "flex", justifyContent: "center", gap: 1 }}>
            Don't have an account?{" "}
            <AppLink to="/signup" sx={{ fontWeight: "bold", fontSize: 20 }}>
              Sign up
            </AppLink>
          </Typography>
        </Stack>
      </form>
    </Container>
  );
};

export default SigninPage;
