import { Button, Stack, TextField, Typography, Alert } from "@mui/material";
import { type ChangeEvent } from "react";
import AppLink from "../../../components/CustomLink";

interface Field {
  name: string;
  label: string;
  type?: string;
}

interface AuthFormProps {
  fields: Field[];
  formData: Record<string, string>;
  error: string;
  buttonText: string;
  footerText: string;
  footerLinkText: string;
  footerLinkTo: string;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AuthForm = ({
  fields,
  formData,
  error,
  buttonText,
  footerText,
  footerLinkText,
  footerLinkTo,
  onSubmit,
  onChange,
}: AuthFormProps) => {
  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={3}>
        {error && <Alert severity="error">{error}</Alert>}

        {fields.map((field) => (
          <TextField
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type || "text"}
            variant="standard"
            fullWidth
            value={formData[field.name]}
            onChange={onChange}
          />
        ))}

        <Button type="submit" size="large" variant="contained">
          {buttonText}
        </Button>

        <Typography
          sx={{
            textWrap: "nowrap",
            display: "flex",
            justifyContent: "center",
            gap: 1,
          }}
        >
          {footerText}{" "}
          <AppLink to={footerLinkTo} sx={{ fontWeight: "bold", fontSize: 20, textWrap: "nowrap" }}>
            {footerLinkText}
          </AppLink>
        </Typography>
      </Stack>
    </form>
  );
};

export default AuthForm;