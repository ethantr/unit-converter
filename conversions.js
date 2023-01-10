const angle = "angle";
const length = "length";
const time = "time";
const power = "power"

const conversions = {
    m: {
        type: length,
        cm: 100,
        km: 1 / 1000,
        mm: 1000,

        ft: 3.28084,
        in: 39.3701,
        mpc: 1 / 3.086e22,
        
        ly: 1 / 946073047258004200,
        AU: 6.68459e-12,
    },
    cm: {
        type: length,
        km: 1 / 100000,
        m: 0.01,

    },

    mm: {
        type:length,
        m: 0.001,
        km: 0.000001,
        cm: 0.1
    },

    ft: {
        type: length,
        m: 0.3048,
        in: 12
    },
    in: {
        type: length,
        m: 0.0254,
        ft: 0.083333
    },
    mpc: {
        type: length,
        m: 3.086e22,
        km: 30856775812799586000
    },
    km: {
        type: length,
        m: 1000,
        cm: 100000,
        mpc: 3.240779289E-20
    },
    ly: {
        type: length,
        m: 946073047258004200,
    },
    W: {
        type: power,
        kW: 1 / 1000
    },
    kW: {
        type: power,
        W: 1000,
    },
    s: {
        type: time,
        yr: 1

    },
    arcsec: {
        type: angle,
        radians: 4.84814e-6,
        degrees: 0.000277778,
    },
    radians: {
        type: angle,
        arcsec: 206265,
        degrees: 57.2958
    },
    degrees: {
        type: angle,
        arcsec: 3600,
        radians: 0.0174533,
    },
    AU: {
        m: 1 / 6.68459e-12,
    }

}

