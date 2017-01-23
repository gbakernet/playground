import betaModule from "beta"

const ALPHA_ID = "Alpha!"
const GAMMA_ID = "Gamma!"

// Used export
export const alpha = () => ALPHA_ID

// Unused export, but it remains in the bundle (¯\_(ツ)_/¯)
export const beta = betaModule

// Unused export
export const gamma = () => GAMMA_ID
