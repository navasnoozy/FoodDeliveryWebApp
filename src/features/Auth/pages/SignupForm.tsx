import { Button, Stack, TextField, Typography, Alert } from "@mui/material";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router";
import { useAuthForm } from "../hooks/useAuthForm";
import { addUser } from "../../../store/slice/userSlice";
import Container from "../../../components/Container";
import AppLink from "../../../components/CustomLink";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { formData, error, setError, handleChange, validate } = useAuthForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      dispatch(addUser(formData as any));
      navigate("/");
    } catch {
      setError("Failed to create account");
    }
  };

  return (
    <Container heading="Create Account">
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          {error && <Alert severity="error">{error}</Alert>}

          <TextField name="name" label="Name" variant="standard" fullWidth value={formData.name} onChange={handleChange} />

          <TextField name="email" label="Email address" type="email" variant="standard" fullWidth value={formData.email} onChange={handleChange} />

          <TextField name="password" label="Password" type="password" variant="standard" fullWidth value={formData.password} onChange={handleChange} />

          <Button type="submit" size="large" variant="contained">
            Sign up
          </Button>

          <Typography sx={{ textWrap: "nowrap", display: "flex", justifyContent: "center", gap: 1 }}>
            Already have an account?{" "}
            <AppLink to="/signin" sx={{ fontWeight: "bold", fontSize: 20 }}>
              Sign in
            </AppLink>
          </Typography>
        </Stack>
      </form>
    </Container>
  );
};

export default SignupForm;
