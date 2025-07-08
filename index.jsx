import React, { useState } from 'react';
import { 
  Deck, 
  Slide, 
  Heading, 
  Text, 
  List, 
  ListItem, 
  CodePane, 
  Box,
  FlexBox,
  Grid,
  Image,
  Appear,
  Notes
} from 'spectacle';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Chip,
  Avatar,
  LinearProgress,
  Paper,
  Divider
} from '@mui/material';
import { 
  Functions as FunctionsIcon,
  TrendingUp as TrendingUpIcon,
  Science as ScienceIcon,
  Engineering as EngineeringIcon,
  Psychology as PsychologyIcon,
  LocalHospital as MedicalIcon
} from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Tema personalizado con gradientes modernos
const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
      light: '#a8b5ff',
      dark: '#3f51b5'
    },
    secondary: {
      main: '#764ba2',
      light: '#a478d4',
      dark: '#4a2c73'
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem'
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem'
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem'
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.15)'
          }
        }
      }
    }
  }
});

// Componente de fórmula estilizada
const StyledFormula = ({ children, title, inline = false }) => (
  <Paper 
    elevation={3} 
    sx={{ 
      p: 3, 
      my: 2, 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      borderLeft: '5px solid #667eea',
      borderRadius: 2
    }}
  >
    {title && (
      <Typography variant="h6" sx={{ mb: 2, color: '#667eea', fontWeight: 600 }}>
        {title}
      </Typography>
    )}
    <Box sx={{ textAlign: 'center', fontSize: '1.2em' }}>
      {inline ? <InlineMath>{children}</InlineMath> : <BlockMath>{children}</BlockMath>}
    </Box>
  </Paper>
);

// Componente de aplicación práctica
const ApplicationCard = ({ icon: Icon, title, description, examples }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
          <Icon />
        </Avatar>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {description}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {examples.map((example, index) => (
          <Chip 
            key={index} 
            label={example} 
            size="small" 
            variant="outlined"
            sx={{ fontSize: '0.75rem' }}
          />
        ))}
      </Box>
    </CardContent>
  </Card>
);

// Componente principal de la presentación
const DerivationPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 15;

  const template = {
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
      tertiary: '#f8fafc',
      quaternary: '#1a202c'
    },
    fonts: {
      header: '"Inter", "Roboto", sans-serif',
      text: '"Inter", "Roboto", sans-serif'
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Deck 
        theme={template}
        transition={{
          from: { opacity: 0, transform: 'scale(0.9)' },
          enter: { opacity: 1, transform: 'scale(1)' },
          leave: { opacity: 0, transform: 'scale(1.1)' }
        }}
        transitionDuration={500}
      >
        {/* Slide 1: Título */}
        <Slide backgroundColor="primary">
          <FlexBox height="100%" flexDirection="column" justifyContent="center">
            <Heading 
              fontSize="4rem" 
              color="white" 
              textAlign="center"
              margin="0 0 2rem 0"
              fontWeight="700"
            >
              Derivación
            </Heading>
            <Heading 
              fontSize="2.5rem" 
              color="rgba(255,255,255,0.9)" 
              textAlign="center"
              margin="0 0 3rem 0"
              fontWeight="400"
            >
              Conceptos Avanzados y Aplicaciones
            </Heading>
            
            <Box sx={{ 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: 4, 
              p: 3,
              backdropFilter: 'blur(10px)'
            }}>
              <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
                Presentado por:
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                  Jose Bienvenido Hernandez Camacho - A00165026
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                  Anderson Ernesto Germosen Mejia - A00049999
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                  Alex Manuel Frias Molina - A00172182
                </Typography>
              </Box>
            </Box>
          </FlexBox>
          <Notes>
            Presentación sobre derivación con enfoque moderno y aplicaciones prácticas
          </Notes>
        </Slide>

        {/* Slide 2: Definición de Derivada */}
        <Slide backgroundColor="tertiary">
          <Heading fontSize="3rem" color="primary" margin="0 0 2rem 0">
            ¿Qué es la Derivada?
          </Heading>
          
          <FlexBox flexDirection="column" gap="2rem">
            <Text fontSize="1.5rem" color="quaternary" lineHeight="1.6">
              La <strong>derivada</strong> es un concepto fundamental del cálculo diferencial que mide la 
              <span style={{ color: '#667eea', fontWeight: 600 }}> razón de cambio instantánea</span> de una función.
            </Text>

            <StyledFormula title="Definición Formal">
              {String.raw`f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}`}
            </StyledFormula>

            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Card sx={{ textAlign: 'center', p: 2 }}>
                  <FunctionsIcon sx={{ fontSize: 48, color: 'primary.main', mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Geométrica
                  </Typography>
                  <Typography variant="body2">
                    Pendiente de la recta tangente
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ textAlign: 'center', p: 2 }}>
                  <TrendingUpIcon sx={{ fontSize: 48, color: 'secondary.main', mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Física
                  </Typography>
                  <Typography variant="body2">
                    Velocidad instantánea
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ textAlign: 'center', p: 2 }}>
                  <ScienceIcon sx={{ fontSize: 48, color: '#f39c12', mb: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Económica
                  </Typography>
                  <Typography variant="body2">
                    Tasa marginal de cambio
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </FlexBox>
        </Slide>

        {/* Slide 3: Reglas Básicas */}
        <Slide backgroundColor="tertiary">
          <Heading fontSize="3rem" color="primary" margin="0 0 2rem 0">
            Reglas Fundamentales de Derivación
          </Heading>
          
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <StyledFormula title="Regla de la Potencia">
                {String.raw`\frac{d}{dx}(x^n) = nx^{n-1}`}
              </StyledFormula>
              
              <StyledFormula title="Regla de la Suma">
                {String.raw`\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)`}
              </StyledFormula>
            </Grid>
            
            <Grid item xs={6}>
              <StyledFormula title="Regla del Producto">
                {String.raw`\frac{d}{dx}[f(x) \cdot g(x)] = f'(x) \cdot g(x) + f(x) \cdot g'(x)`}
              </StyledFormula>
              
              <StyledFormula title="Regla del Cociente">
                {String.raw`\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{[g(x)]^2}`}
              </StyledFormula>
            </Grid>
          </Grid>

          <Paper sx={{ p: 2, mt: 3, bgcolor: '#fff3cd', borderLeft: '4px solid #f39c12' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Ejemplo Práctico:
            </Typography>
            <Typography variant="body1">
              Para <InlineMath>{String.raw`f(x) = 3x^4 + 2x^2 - 5x + 1`}</InlineMath>
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              La derivada es: <InlineMath>{String.raw`f'(x) = 12x^3 + 4x - 5`}</InlineMath>
            </Typography>
          </Paper>
        </Slide>

        {/* Slide 4: Regla de la Cadena */}
        <Slide backgroundColor="tertiary">
          <Heading fontSize="3rem" color="primary" margin="0 0 2rem 0">
            Regla de la Cadena
          </Heading>
          
          <StyledFormula title="Fórmula General">
            {String.raw`\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)`}
          </StyledFormula>

          <FlexBox flexDirection="column" gap="2rem">
            <Text fontSize="1.3rem" color="quaternary">
              La regla de la cadena es esencial para derivar <strong>funciones compuestas</strong>, 
              donde una función está dentro de otra función.
            </Text>

            <Paper sx={{ p: 3, bgcolor: '#e8f4f8', borderRadius: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2196F3' }}>
                Ejemplo Paso a Paso:
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Sea <InlineMath>{String.raw`y = (3x^2 + 1)^5`}</InlineMath>
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Identificamos: <InlineMath>{String.raw`f(u) = u^5`}</InlineMath> y <InlineMath>{String.raw`g(x) = 3x^2 + 1`}</InlineMath>
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Entonces: <InlineMath>{String.raw`f'(u) = 5u^4`}</InlineMath> y <InlineMath>{String.raw`g'(x) = 6x`}</InlineMath>
              </Typography>
              <Typography variant="body1">
                Resultado: <InlineMath>{String.raw`\frac{dy}{dx} = 5(3x^2 + 1)^4 \cdot 6x = 30x(3x^2 + 1)^4`}</InlineMath>
              </Typography>
            </Paper>
          </FlexBox>
        </Slide>

        {/* Slide 5: Funciones Especiales */}
        <Slide backgroundColor="tertiary">
          <Heading fontSize="3rem" color="primary" margin="0 0 2rem 0">
            Derivadas de Funciones Especiales
          </Heading>
          
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Card sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  Trigonométricas
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="body2">
                    <InlineMath>{String.raw`\frac{d}{dx}(\sin x) = \cos x`}</InlineMath>
                  </Typography>
                  <Typography variant="body2">
                    <InlineMath>{String.raw`\frac{d}{dx}(\cos x) = -\sin x`}</InlineMath>
                  </Typography>
                  <Typography variant="body2">
                    <InlineMath>{String.raw`\frac{d}{dx}(\tan x) = \sec^2 x`}</InlineMath>
                  </Typography>
                </Box>
              </Card>
            </Grid>
            
            <Grid item xs={4}>
              <Card sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}>
                  Exponenciales
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="body2">
                    <InlineMath>{String.raw`\frac{d}{dx}(e^x) = e^x`}</InlineMath>
                  </Typography>
                  <Typography variant="body2">
                    <InlineMath>{String.raw`\frac{d}{dx}(a^x) = a^x \ln(a)`}</InlineMath>
                  </Typography>
                </Box>
              </Card>
            </Grid>
            
            <Grid item xs={4}>
              <Card sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#f39c12' }}>
                  Logarítmicas
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="body2">
                    <InlineMath>{String.raw`\frac{d}{dx}(\ln x) = \frac{1}{x}`}</InlineMath>
                  </Typography>
                  <Typography variant="body2">
                    <InlineMath>{String.raw`\frac{d}{dx}(\log_a x) = \frac{1}{x \ln a}`}</InlineMath>
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>

          <Paper sx={{ p: 2, mt: 3, bgcolor: '#d4edda', borderLeft: '4px solid #28a745' }}>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              Dato fascinante: La función exponencial <InlineMath>{String.raw`e^x`}</InlineMath> es la única función que es igual a su propia derivada.
            </Typography>
          </Paper>
        </Slide>

        {/* Slide 6: Aplicaciones en Física */}
        <Slide backgroundColor="tertiary">
          <Heading fontSize="3rem" color="primary" margin="0 0 2rem 0">
            Aplicaciones en Física
          </Heading>
          
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <ApplicationCard
                icon={TrendingUpIcon}
                title="Cinemática"
                description="Análisis del movimiento y sus características"
                examples={[
                  'Velocidad: v(t) = dx/dt',
                  'Aceleración: a(t) = dv/dt',
                  'Jerk: da/dt'
                ]}
              />
            </Grid>
            
            <Grid item xs={6}>
              <ApplicationCard
                icon={ScienceIcon}
                title="Dinámica"
                description="Fuerzas y energía en sistemas físicos"
                examples={[
                  'Fuerza: F = ma',
                  'Potencia: P = F·v',
                  'Trabajo: W = ∫F·dx'
                ]}
              />
            </Grid>
          </Grid>

          <StyledFormula title="Ejemplo: Movimiento Uniformemente Acelerado">
            {String.raw`\begin{align}
            x(t) &= x_0 + v_0 t + \frac{1}{2}at^2 \\
            v(t) &= \frac{dx}{dt} = v_0 + at \\
            a(t) &= \frac{dv}{dt} = a \text{ (constante)}
            \end{align}`}
          </StyledFormula>
        </Slide>

        {/* Slide 7: Aplicaciones en Economía */}
        <Slide backgroundColor="tertiary">
          <Heading fontSize="3rem" color="primary" margin="0 0 2rem 0">
            Aplicaciones en Economía
          </Heading>
          
          <Text fontSize="1.3rem" color="quaternary" margin="0 0 2rem 0">
            Los conceptos <strong>marginales</strong> son derivadas que miden el cambio instantáneo en variables económicas.
          </Text>

          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Card sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  Costo Marginal
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  <InlineMath>{String.raw`CM = \frac{dC}{dq}`}</InlineMath>
                </Typography>
                <Typography variant="body2">
                  Costo adicional de producir una unidad más
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={4}>
              <Card sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}>
                  Ingreso Marginal
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  <InlineMath>{String.raw`IM = \frac{dI}{dq}`}</InlineMath>
                </Typography>
                <Typography variant="body2">
                  Ingreso adicional por vender una unidad más
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={4}>
              <Card sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#f39c12' }}>
                  Utilidad Marginal
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  <InlineMath>{String.raw`UM = \frac{dU}{dq}`}</InlineMath>
                </Typography>
                <Typography variant="body2">
                  Utilidad adicional por consumir una unidad más
                </Typography>
              </Card>
            </Grid>
          </Grid>

          <Paper sx={{ p: 3, mt: 3, bgcolor: '#fff3cd', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Ejemplo Práctico:
            </Typography>
            <Typography variant="body1">
              Si el costo total es <InlineMath>{String.raw`C(x) = 1000 + 50x + 0.1x^2`}</InlineMath>
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              El costo marginal es: <InlineMath>{String.raw`CM = C'(x) = 50 + 0.2x`}</InlineMath>
            </Typography>
          </Paper>
        </Slide>

        {/* Slide 8: Aplicaciones en Medicina */}
        <Slide backgroundColor="tertiary">
          <Heading fontSize="3rem" color="primary" margin="0 0 2rem 0">
            Aplicaciones en Medicina y Biología
          </Heading>
          
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <ApplicationCard
                icon={MedicalIcon}
                title="Farmacocinética"
                description="Estudio del comportamiento de medicamentos en el organismo"
                examples={[
                  'Velocidad de absorción',
                  'Tasa de eliminación',
                  'Concentración plasmática'
                ]}
              />
            </Grid>
            
            <Grid item xs={4}>
              <ApplicationCard
                icon={TrendingUpIcon}
                title="Epidemiología"
                description="Análisis de propagación de enfermedades"
                examples={[
                  'Velocidad de contagio',
                  'Modelos SIR',
                  'Efectividad de vacunas'
                ]}
              />
            </Grid>
            
            <Grid item xs={4}>
              <ApplicationCard
                icon={PsychologyIcon}
                title="Fisiología"
                description="Procesos biológicos y sus cambios"
                examples={[
                  'Ritmo cardíaco',
                  'Crecimiento celular',
                  'Tasa metabólica'
                ]}
              />
            </Grid>
          </Grid>

          <StyledFormula title="Modelo de Crecimiento Poblacional">
            {String.raw`\frac{dP}{dt} = rP\left(1 - \frac{P}{K}\right)`}
          </StyledFormula>
          
          <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
            Donde <InlineMath>P</InlineMath> es la población, <InlineMath>r</InlineMath> es la tasa de crecimiento, 
            y <InlineMath>K</InlineMath> es la capacidad de carga.
          </Typography>
        </Slide>

        {/* Slide 9: Aplicaciones en Ingeniería */}
        <Slide backgroundColor="tertiary">
          <Heading fontSize="3rem" color="primary" margin="0 0 2rem 0">
            Aplicaciones en Ingeniería
          </Heading>
          
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <ApplicationCard
                icon={EngineeringIcon}
                title="Ingeniería Eléctrica"
                description="Análisis de circuitos y sistemas de control"
                examples={[
                  'Corriente alterna',
                  'Filtros de frecuencia',
                  'Control automático',
                  'Procesamiento de señales'
                ]}
              />
            </Grid>
            
            <Grid item xs={6}>
              <ApplicationCard
                icon={EngineeringIcon}
                title="Ingeniería Civil"
                description="Diseño y análisis de estructuras"
                examples={[
                  'Análisis de esfuerzos',
                  'Optimización de materiales',
                  'Flujo de fluidos',
                  'Diseño sísmico'
                ]}
              />
            </Grid>
          </Grid>

          <StyledFormula title="Ley de Ohm en Circuitos AC">
            {String.raw`V(t) = V_0 \sin(\omega t + \phi) \Rightarrow I(t) = \frac{dV}{dt} \cdot \frac{1}{R} = \frac{V_0 \omega}{R} \cos(\omega t + \phi)`}
          </StyledFormula>

          <Paper sx={{ p: 2, mt: 3, bgcolor: '#d4edda', borderLeft: '4px solid #28a745' }}>
            <Typography variant="body1">
              <strong>Ejemplo:</strong> En el diseño de puentes, las derivadas calculan los puntos de máximo esfuerzo 
              para determinar dónde reforzar la estructura.
            </Typography>
          </Paper>
        </Slide>

        {/* Slide 10: Inteligencia Artificial */}
        <Slide backgroundColor="tertiary">
          <Heading fontSize="3rem" color="primary" margin="0 0 2rem 0">
            Derivadas en Inteligencia Artificial
          </Heading>
          
          <Text fontSize="1.3rem" color="quaternary" margin="0 0 2rem 0">
            Las derivadas son el <strong>corazón</strong> del aprendizaje automático moderno.
          </Text>

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  Descenso de Gradiente
                </Typography>
                <StyledFormula>
                  {String.raw`\theta_{new} = \theta_{old} - \alpha \nabla J(\theta)`}
                </StyledFormula>
                <Typography variant="body2">
                  Algoritmo fundamental para entrenar redes neuronales
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}>
                  Retropropagación
                </Typography>
                <StyledFormula>
                  {String.raw`\frac{\partial J}{\partial w_{ij}} = \frac{\partial J}{\partial a_j} \cdot \frac{\partial a_j}{\partial z_j} \cdot \frac{\partial z_j}{\partial w_{ij}}`}
                </StyledFormula>
                <Typography variant="body2">
                  Cálculo eficiente de gradientes en redes profundas
                </Typography>
              </Card>
            </Grid>
          </Grid>

          <Paper sx={{ p: 3, mt: 3, bgcolor: '#e8f4f8', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2196F3' }}>
              Aplicación Práctica:
            </Typography>
            <Typography variant="body1">
              En reconocimiento de imágenes, las derivadas permiten que la red neuronal 
              <strong> aprenda automáticamente</strong> a identificar patrones ajustando millones de parámetros.
            </Typography>
          </Paper>
        </Slide>

        {/* Slide 11: Optimización */}
        <Slide backgroundColor="tertiary">
          <Heading fontSize="3rem" color="primary" margin="0 0 2rem 0">
            Optimización: Máximos y Mínimos
          </Heading>
          
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}>
                  Criterios de Optimización
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant="body1">
                    <strong>Condición necesaria:</strong> <InlineMath>{String.raw`f'(x) = 0`}</InlineMath>
                  </Typography>
                  <Typography variant="body1">
                    <strong>Criterio de segunda derivada:</strong>
                  </Typography>
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body2">
                      • <InlineMath>{String.raw`f''(x) > 0`}</InlineMath> → mínimo local
                    </Typography>
                    <Typography variant="body2">
                      • <InlineMath>{String.raw`f''(x) < 0`}</InlineMath> → máximo local
                    </Typography>
                    <Typography variant="body2">
                      • <InlineMath>{String.raw`f''(x) = 0`}</InlineMath> → prueba inconclusa
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
            
            <Grid item xs={6}>
              <Card sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}>
                  Problema Clásico
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  <strong>Pregunta:</strong> ¿Qué rectángulo con perímetro fijo maximiza el área?
                </Typography>
                <StyledFormula>
                  {String.raw`\begin{align}
                  P &= 2x + 2y = \text{constante} \\
                  A &= xy \\
                  \frac{dA}{dx} &= 0 \Rightarrow x = y
                  \end{align}`}
                </StyledFormula>
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#28a745' }}>
                  Respuesta: El cuadrado
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Slide>

        {/* Slide 12: Recursos Educativos */}
        <Slide backgroundColor="tertiary">
          <Heading fontSize="3rem" color="primary" margin="0 0 2rem 0">
            Recursos Educativos Recomendados
          </Heading>
          
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Card sx={{ p: 3, bgcolor: '#e8f4f8' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2196F3' }}>
                  Videos en Español
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button 
                    variant="contained" 
                    sx={{ justifyContent: 'flex-start' }}
                    startIcon={<span>📺</span>}
                  >
                    Derivadas usando la definición - Matemáticas Profe Alex
                  </Button>
                  <Button 
                    variant="contained" 
                    sx={{ justifyContent: 'flex-start' }}
                    startIcon={<span>📺</span>}
                  >
                    La DERIVADA lo cambió TODO - Explicación conceptual
                  </Button>
                  <Button 
                    variant="contained" 
                    sx={{ justifyContent: 'flex-start' }}
                    startIcon={<span>📺</span>}
                  >
                    Derivadas en la Vida Cotidiana - 3 Ejemplos
                  </Button>
                </Box>
              </Card>
            </Grid>
            
            <Grid item xs={6}>
              <Card sx={{ p: 3, bgcolor: '#f8f9fa' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#6c757d' }}>
                  Herramientas Interactivas
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Chip label="Desmos Graphing Calculator" variant="outlined" />
                  <Chip label="Wolfram Alpha" variant="outlined" />
                  <Chip label="GeoGebra" variant="outlined" />
                  <Chip label="Khan Academy" variant="outlined" />
                </Box>
              </Card>
            </Grid>
          </Grid>

          <Paper sx={{ p: 2, mt: 3, bgcolor: '#d4edda', borderLeft: '4px solid #28a745' }}>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              Recomendación: Combina teoría con práctica usando software matemático para visualizar conceptos.
            </Typography>
          </Paper>
        </Slide>

        {/* Slide 13: Ejemplos Cotidianos */}
        <Slide backgroundColor="tertiary">
          <Heading fontSize="3rem" color="primary" margin="0 0 2rem 0">
            Derivadas en la Vida Cotidiana
          </Heading>
          
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="h4" sx={{ mb: 1 }}>🚗</Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Automovilismo
                </Typography>
                <Typography variant="body2">
                  El velocímetro muestra la derivada de la posición
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={4}>
              <Card sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="h4" sx={{ mb: 1 }}>💰</Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Finanzas
                </Typography>
                <Typography variant="body2">
                  Tasa de crecimiento de inversiones y análisis de rentabilidad
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={4}>
              <Card sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="h4" sx={{ mb: 1 }}>🏠</Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Climatización
                </Typography>
                <Typography variant="body2">
                  Control automático de temperatura en hogares
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={4}>
              <Card sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="h4" sx={{ mb: 1 }}>📱</Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Tecnología
                </Typography>
                <Typography variant="body2">
                  Algoritmos de recomendación y procesamiento de señales
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={4}>
              <Card sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="h4" sx={{ mb: 1 }}>🏥</Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Salud
                </Typography>
                <Typography variant="body2">
                  Dosificación de medicamentos y análisis médicos
                </Typography>
              </Card>
            </Grid>
            
            <Grid item xs={4}>
              <Card sx={{ p: 2, textAlign: 'center', height: '100%' }}>
                <Typography variant="h4" sx={{ mb: 1 }}>🌱</Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Agricultura
                </Typography>
                <Typography variant="body2">
                  Optimización de riego y análisis de rendimientos
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Slide>

        {/* Slide 14: Derivación Implícita */}
        <Slide backgroundColor="tertiary">
          <Heading fontSize="3rem" color="primary" margin="0 0 2rem 0">
            Derivación Implícita
          </Heading>
          
          <Text fontSize="1.3rem" color="quaternary" margin="0 0 2rem 0">
            Cuando una ecuación no está despejada explícitamente para <InlineMath>y</InlineMath>, 
            usamos <strong>derivación implícita</strong>.
          </Text>

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <StyledFormula title="Ejemplo Clásico: Círculo">
                {String.raw`\begin{align}
                x^2 + y^2 &= 25 \\
                \frac{d}{dx}(x^2 + y^2) &= \frac{d}{dx}(25) \\
                2x + 2y\frac{dy}{dx} &= 0 \\
                \frac{dy}{dx} &= -\frac{x}{y}
                \end{align}`}
              </StyledFormula>
            </Grid>
            
            <Grid item xs={6}>
              <Card sx={{ p: 3, height: '100%' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'secondary.main' }}>
                  Aplicaciones Prácticas
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Chip label="Relaciones temperatura-humedad" size="small" />
                  <Chip label="Presión arterial-frecuencia cardíaca" size="small" />
                  <Chip label="Equilibrio de mercado" size="small" />
                  <Chip label="Sistemas de control" size="small" />
                </Box>
              </Card>
            </Grid>
          </Grid>

          <Paper sx={{ p: 3, mt: 3, bgcolor: '#fff3cd', borderRadius: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Ventaja Clave:
            </Typography>
            <Typography variant="body1">
              La derivación implícita permite analizar relaciones complejas entre variables 
              sin necesidad de despejar explícitamente una variable en términos de otra.
            </Typography>
          </Paper>
        </Slide>

        {/* Slide 15: Conclusiones */}
        <Slide backgroundColor="primary">
          <FlexBox height="100%" flexDirection="column" justifyContent="center">
            <Heading 
              fontSize="3.5rem" 
              color="white" 
              textAlign="center"
              margin="0 0 2rem 0"
              fontWeight="700"
            >
              Conclusiones
            </Heading>
            
            <Box sx={{ 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: 4, 
              p: 4,
              backdropFilter: 'blur(10px)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              <Typography variant="h5" sx={{ color: 'white', mb: 3, fontWeight: 600, textAlign: 'center' }}>
                Las derivadas son herramientas fundamentales que nos permiten:
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h4" sx={{ mr: 2 }}>🔍</Typography>
                    <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      Entender cómo cambian las cosas
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h4" sx={{ mr: 2 }}>⚡</Typography>
                    <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      Optimizar procesos y recursos
                    </Typography>
                  </Box>
                </Grid>
                
                <Grid item xs={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h4" sx={{ mr: 2 }}>🔮</Typography>
                    <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      Predecir comportamientos futuros
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="h4" sx={{ mr: 2 }}>🚀</Typography>
                    <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)' }}>
                      Resolver problemas complejos
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              
              <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.3)' }} />
              
              <Typography variant="h6" sx={{ color: 'white', textAlign: 'center', fontStyle: 'italic' }}>
                "El cálculo diferencial no es solo matemática abstracta, sino una herramienta poderosa 
                que moldea nuestra comprensión del mundo y nos permite innovar en todas las áreas del conocimiento humano."
              </Typography>
            </Box>
          </FlexBox>
        </Slide>
      </Deck>
    </ThemeProvider>
  );
};

export default DerivationPresentation;
