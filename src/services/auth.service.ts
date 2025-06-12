const API_BASE_URL = 'http://TU_DIRECCION_IP_LOCAL:3000';

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginSuccessResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: {
    id: number;
    email: string;
    nombre?: string;
    apellido?: string;
  };
}

interface ApiErrorResponse {
  success: boolean;
  message: string;
}

interface RegisterPayload {
  email: string;
  password: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: string;
  sexo: 'Masculino' | 'Femenino' | 'Otro' | 'Prefiero no decir';
  telefono?: string;
}

export const loginUser = async (userPayload: LoginPayload): Promise<LoginSuccessResponse | ApiErrorResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userPayload),
    });

    const data: LoginSuccessResponse | ApiErrorResponse = await response.json();

    if (response.ok) {
      console.log('Inicio de sesión exitoso:', data);
      return data;
    } else {
      console.error('Error en el inicio de sesión:', data.message);
      return data;
    }
  } catch (error) {
    console.error('Error de red o del servidor al iniciar sesión:', error);
    return { success: false, message: 'No se pudo conectar con el servidor. Intenta de nuevo más tarde.' };
  }
};

export const registerUser = async (userPayload: RegisterPayload): Promise<LoginSuccessResponse | ApiErrorResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userPayload),
      });
  
      const data: LoginSuccessResponse | ApiErrorResponse = await response.json();
  
      if (response.ok) {
        console.log('Registro exitoso:', data);
        return data;
      } else {
        console.error('Error en el registro:', data.message);
        return data;
      }
    } catch (error) {
      console.error('Error de red o del servidor al registrar:', error);
      return { success: false, message: 'No se pudo conectar con el servidor. Intenta de nuevo más tarde.' };
    }
};