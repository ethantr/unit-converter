const conversions = {
    m: {
        ft: 3.28084,
        in: 39.3701,
        mpc: 1/3.086e22,
        km: 1 / 1000,
        ly: 1 / 946073047258004200
    },
    ft: {
        m: 0.3048,
        in: 12
    },
    in: {
        m: 0.0254,
        ft: 0.083333
    },
    mpc: {
        m: 3.086e22,
        km: 30856775812799586000
    },
    km: {
        m: 1000,
        mpc:3.240779289E-20
    },
    ly: {
        m: 946073047258004200,
    },
    W: {
        kW:1000
    },
    kW: {
        W:1/1000,
    },
    s: {
        yr:1

    },
    arcsec:{
        radians:4.84814e-6,
        degrees: 0.000277778,
    },
    radians:{
        arcsec:206265,
        degrees:57.2958
    },
    degrees:{
        arcsec:3600,
        radians: 0.0174533,
    }

}

