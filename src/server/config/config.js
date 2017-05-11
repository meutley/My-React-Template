module.exports = {
    environment: 'N/A',
    
    web: {
        port: 3000,
        
        content: {
            static: [
                { mountPath: '/app/content', physicalPath: 'client/public' }
            ]
        }
    },
    
    database: {
        connections: [
            {
                name: 'AppDb',
                details: {
                    server: 'ServerName',
                    database: 'DbName',
                    driver: 'msnodesqlv8',
                    options: {
                        trustedConnection: true
                    }
                }
            }
        ]
    }
}